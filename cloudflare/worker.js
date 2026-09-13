const TERMINAL_AGENT = /^(curl|wget|httpie|xh)\/|powershell\//i;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const agent = request.headers.get('user-agent') ?? '';
    const isRead = request.method === 'GET' || request.method === 'HEAD';

    if (url.pathname !== '/' || !isRead || !TERMINAL_AGENT.test(agent)) {
      return fetch(request);
    }

    const art = await fetch(new URL('/curl', url), { cf: { cacheTtl: 300 } });
    if (!art.ok) return fetch(request);

    return new Response(request.method === 'HEAD' ? null : art.body, {
      headers: {
        'content-type': 'text/plain; charset=utf-8',
        'cache-control': 'no-store',
        vary: 'User-Agent'
      }
    });
  }
};
