const res = new Response("Resource created", {status: 201});
const mno = new Response("This route currently only accepts POST requests", {
    status: 405,
    headers: {
        "Allow": "POST"
    }
});

Deno.serve({ port: 80, hostname: "0.0.0.0" }, async (_req) => {
    if (_req.method == "POST") {
        let form = await _req.formData()
        console.log(JSON.stringify({
            "username": form.username,
            "password": form.password
        }))
        return res;
    } else return mno;
});