export default function handler(req, res) {
  res.setPreviewData({ name: "Anusha" });
  res.redirect(req.query.redirect);
}
