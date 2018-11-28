'use strict'

module.exports = function setupGps (GpsModel ) {
  async function create (agent) {
    

    const result = await GpsModel.create(agent)
    return result.toJSON()
  }

  async function update (id, usuario) {
    const cond = {
      where: {
        id
      }
    }
    
    const updated = await GpsModel.update(usuario, cond)
    return updated
  }

  async function findOne (id){
    return await GpsModel.findOne({
        where:{
            id
        }
    })
  }

  function findAll(){
    return GpsModel.findAll()
  }

  async function deleteOne(id){ 
    return await GpsModel.destroy({
      where:{ 
        id: id
      }
    })
  }

  return {
    create,
    update,
    findOne,
    findAll,
    deleteOne
  }
}

