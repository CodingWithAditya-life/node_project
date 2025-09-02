const express = require("express");
const Person = require("../Person");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;
    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!response) {
      res.status(404).json({ error: "Person not found" });
    }

    console.log("data updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const response = await Person.findByIdAndRemove(id);

    if (!response) {
      res.status(404).json({ error: "Person not found" });
    }

    console.log("data deleted");
    res.status(200).json({ message: "Person Deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server error" });
  }
});

module.exports = router;
