import { FutureProjectsModule } from "../models/futureProjects.js";

export const getALLFutureProjects = async (req, res) => {
  const FP = await FutureProjectsModule.findAll({ where: { isWanted: 0 } });
  return res.send({ FP });
};

export const getALFutureProjectsWanted = async (req, res) => {
  const FP = await FutureProjectsModule.findAll({ where: { isWanted: 1 } });
  return res.send({ FP });
};

export const getFutureProjectsid = async (req, res) => {
  const id = req.params.id;
  const FP = await FutureProjectsModule.findByPk(id);
  if (FP === null) {
    res.send("Não existe Future Projects com id: " + id);
  }
  res.send({ FP });
};

export const newFutureProjects = async (req, res) => {
  const newFP = {
    title: req.body.title,
    description: req.body.description,
    isWanted: req.body.isWanted,
  };
  await FutureProjectsModule.create(newFP);

  res.send({ newFP });
};

export const updateFutureProjects = async (req, res) => {
  const id = req.params.id;
  const FPUpdated = {
    title: req.body.title,
    description: req.body.description,
    isWanted: req.body.isWanted,
  };
  const FP = await FutureProjectsModule.findByPk(id);
  if (FP !== null) {
    FP.update(FPUpdated);
    return res.send("FutureProjects  Updated");
  } else {
    return res.send("Não existe Future Projects com id: " + id);
  }
};

export const deleteFutureProjects = async (req, res) => {
  const id = req.params.id;
  const FP = await FutureProjectsModule.findByPk(id);
  if (FP !== null) {
    FP.destroy({ where: { id: id } });
    return res.send("Future Projects  Deleted");
  } else {
    return res.send("Não existe Future Projects com id: " + id);
  }
};
