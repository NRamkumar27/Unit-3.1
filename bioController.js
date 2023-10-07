// bioController.js
const Bio = require('./bioModel');

// Error handler function
function handleError(res, err) {
  res.status(500).json({
    status: "error",
    message: err.message
  });
}

// Index: Get all bios
exports.index = async (req, res) => {
  try {
    const bio = await Bio.find();
    res.json({
      status: "success",
      message: "Got Bio Successfully!",
      data: bio
    });
  } catch (err) {
    handleError(res, err);
  }
};

// Create: Add a new bio
exports.add = async (req, res) => {
    try {
      const name = req.body.name;
      const email = req.body.email;
      const phone = req.body.phone;
      const address = req.body.address;
  
      const bio = new Bio({
        name: name,
        email: email,
        phone: phone,
        address: address
      });
       console.log(bio);
      // Save the new bio to the database
      const savedBio = await bio.save();
      res.json({
        message: "New Bio Added!",
        data: savedBio
      });
    } catch (error) {
      res.status(500).json({
        message: "Error adding bio",
        error: error.message
      });
    }};
  

// View: Get a single bio by ID
exports.view = async (req, res) => {
  try {
    const bio = await Bio.findById(req.params.bio_id);
    res.json({
      message: 'Bio Details',
      data: bio
    });
  } catch (err) {
    handleError(res, err);
  }
};

// Update: Update a bio by ID
exports.update = async (req, res) => {
  try {
    const bio = await Bio.findById(req.params.bio_id);

    bio.name = req.body.name || bio.name;
    bio.email = req.body.email || bio.email;
    bio.phone = req.body.phone || bio.phone;
    bio.address = req.body.address || bio.address;

    await bio.save();

    res.json({
      message: "Bio Updated Successfully",
      data: bio
    });
  } catch (err) {
    handleError(res, err);
  }
};

// Delete: Delete a bio by ID
exports.delete = async (req, res) => {
  try {
    await Bio.deleteOne({ _id: req.params.bio_id });
    res.json({
      status: "success",
      message: 'Bio Deleted'
    });
  } catch (err) {
    handleError(res, err);
  }
};
