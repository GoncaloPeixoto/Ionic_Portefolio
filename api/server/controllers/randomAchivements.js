import { RandomAchivementsModule } from "../models/randomAchivments.js";

export const getRandomAchivements = async (req, res) => {
  const RA = await RandomAchivementsModule.findAll();
  return res.send({ RA });
};

export const getRandomAchivementsId = async (req, res) => {
  const id = req.params.id;
  const RA = await RandomAchivementsModule.findByPk(id);
  if (RA === null) {
    res.send("Não existe Random Achivement com id: " + id);
  }
  res.send({ RA });
};

export const newRandomAchivements = async (req, res) => {
  const newRA = {
    title: req.body.title,
    description: req.body.description,
  };
  await RandomAchivementsModule.create(newRA);

  res.send({ newRA });
};

export const updateRandomAchivements = async (req, res) => {
  const id = req.params.id;
  const RAUpdated = {
    title: req.body.title,
    description: req.body.description,
    isWanted: req.body.isWanted,
  };
  const RA = await RandomAchivementsModule.findByPk(id);
  if (RA !== null) {
    RA.update(RAUpdated);
    return res.send("Random Achivement  Updated");
  } else {
    return res.send("Não existe Random Achivement com id: " + id);
  }
};

export const deleteRandomAchivements = async (req, res) => {
  const id = req.params.id;
  const RA = await RandomAchivementsModule.findByPk(id);
  if (RA !== null) {
    RA.destroy({ where: { id: id } });
    return res.send("Random Achivement  Deleted");
  } else {
    return res.send("Não existe Random Achivement com id: " + id);
  }
};
