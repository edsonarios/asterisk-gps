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

  async function findAll () {
    return GpsModel.findAll({
      order: [[ 'id', 'ASC' ]]
    })
  }

  async function findLast () {
    return GpsModel.findAll({
      limit: 1,
      order: [[ 'id', 'DESC' ]],
      raw: true
    })
  }

  async function deleteAll(){ 
    return await GpsModel.destroy({
      where:{}
    })
  }

  return {
    create,
    update,
    findOne,
    findAll,
    findLast,
    deleteAll
  }
}

