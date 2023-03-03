export default function handler(req, res) {
  const { uid } = req.query;
  const cookies = req.cookies;
  /*   res
    .states(200)
    .json({ name: `Jimmy Choi" ${uid} ${JSON.stringify(cookies)}` }); */
  res.redirect(307, `/api/user`);

  res.status(500).send({ error: "error" });
}
