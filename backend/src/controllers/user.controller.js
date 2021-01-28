exports.allAccess = (_req, res) => {
  res.status(200).json({ content: "Public content" });
};

exports.driverBoard = (_req, res) => {
  res.status(200).json({
    content: "Driver Content",
  });
};

exports.clientBoard = (_req, res) => {
  res.status(200).json({ content: "Client Content" });
};

exports.adminBoard = (_req, res) => {
  res.status(200).json({ content: "Admin content" });
};
