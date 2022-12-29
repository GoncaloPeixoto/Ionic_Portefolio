import { PersonalExModule } from "../models/personalEx.js";

export const getALLPersonalEx = async (req, res) => {
  const Pex = await PersonalExModule.findAll();
  return res.send({ Pex });
};

export const getPersonalExid = async (req, res) => {
  const id = req.params.id;
  const Pex = await PersonalExModule.findByPk(id);
  if (Pex === null) {
    res.send("Não existe Personal Experiences com id: " + id);
  }
  res.send({ Pex });
};

export const newPersonalEx = async (req, res) => {
  const newPex = {
    title: req.body.title,
    description: req.body.description,
  };
  await PersonalExModule.create(newPex);

  res.send({ newPex });
};

export const updatePersonalEx = async (req, res) => {
  const id = req.params.id;
  const PexUpdated = {
    title: req.body.title,
    description: req.body.description,
    isWanted: req.body.isWanted,
  };
  const Pex = await PersonalExModule.findByPk(id);
  if (Pex !== null) {
    Pex.update(PexUpdated);
    return res.send("Personal Experiences  Updated");
  } else {
    return res.send("Não existe Personal Experiences com id: " + id);
  }
};

export const deletePersonalEx = async (req, res) => {
  const id = req.params.id;
  const Pex = await PersonalExModule.findByPk(id);
  if (Pex !== null) {
    Pex.destroy({ where: { id: id } });
    return res.send("Personal Experiences  Deleted");
  } else {
    return res.send("Não existe Personal Experiences com id: " + id);
  }
};
