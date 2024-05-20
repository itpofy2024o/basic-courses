const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'expressapp',
  password: 'qweasdzxc',
  port: 5432,
})
const getInstances = (_, response) => {
  pool.query('SELECT * FROM threads ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getInstanceById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM threads WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createInstance = (request, response) => {
  const { name, comment } = request.body

  pool.query('INSERT INTO threads (name, comment) VALUES ($1, $2)', [name, comment], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send("added")
  })
}

const updateInstance = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, comment } = request.body

  pool.query(
    'UPDATE threads SET name = $1, comment = $2 WHERE id = $3',
    [name, comment, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Instance modified with ID: ${id}`)
    }
  )
}

const deleteInstance = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM threads WHERE id = $1', [id], (error, _) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Instance deleted with ID: ${id}`)
  })
}

module.exports = {
  getInstances,
  getInstanceById,
  createInstance,
  updateInstance,
  deleteInstance,
}