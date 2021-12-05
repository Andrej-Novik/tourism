import express from "express";
const router = express.Router();
import UseCases from "../../useCases";

router.get("", async (req, res) => {
  const { value, error } = await UseCases.ObjectsService.getList();
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

router.get("/pagination/", async (req,res) => {
  const { value, error } = await UseCases.ObjectsService.getObjectsByQuery();
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
})
router.post("", async (req, res) => {
  const { value, error } = await UseCases.ObjectsService.createObject(
    req.body.img,
    req.body.name,
    req.body.country,
    req.body.text,
    req.body.rate,
  );
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

router.delete("/:id", async (req, res) => {
  const { value, error } = await UseCases.ObjectsService.deleteObject(
    req.params.id
  );
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

router.patch("/:id", async (req, res) => {
  const { value, error } = await UseCases.ObjectsService.editObject(
    req.params.id,
    req.body.rate
  );
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

router.get("/:id", async (req, res) => {
  const { value, error } = await UseCases.ObjectsService.getObject(req.params.id);
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});
router.get("/search/:name", async (req, res) => {
  const { value, error } = await UseCases.ObjectsService.getObjectByName(req.params.name);
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

export default router;
