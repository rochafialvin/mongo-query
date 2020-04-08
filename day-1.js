// Melihat daftar database
show dbs

// Memilih database yang akan digunakan
use admin
// Jika database belum ada, maka akan di create dan dipilih untuk dioperasikan
use simplemerce

// CRUD (Create, Read, Update, Delete)

// CREATE

// Inset satu data 
db.users.insertOne( {name: "Invoker", age: 30, married: false} )

// Insert banyak data
db.users.insertMany([
    {name: "Brew Master", age: 28, married: true},
    {name: "Razor", age: 38, married: false},
    {name: "Crystal Mayden", age: 37, married: false},
    {name: "Pudge", age: 26, married: true},
    {name: "Dazzle", age: 28, married: false},
    {name: "Axe", age: 39, married: false},
    {name: "Phantom Assasin", age: 26, married: true},
    {name: "Templar Assasin", age: 27, married: false},
    {name: "Nyx Assasin", age: 35, married: false}
])

// READ
db.users.find({})

// Users yang sudah menikah
db.users.find({ married: true })

// Users yang memiliki umur 28
db.users.find({ age: 28 })

// Users yang memiliki umur lebih besar dari 30
db.users.find({ age: { $gt : 30 } })

// Users yang memiliki umur lebih besar sama dengan 30
db.users.find({ age: { $gte : 30 } })

// Users yang memiliki umur lebih kecil dari 37
db.users.find({ age: { $lt : 37 } })

// Users yang memiliki umur lebih kecil sama dengan 37
db.users.find({ age: { $lte : 37 } })

// Users yang memiliki umur dari 26 - 30
db.users.find({ age: { $gte : 26, $lte : 30 } })

// Users yang umurnya kurang dari 37 D A N sudah menikah
db.users.find( { age : { $lt : 37 }, married : true } )

// Users yang umurnya 28 ATAU sudah menikah
// $or : [ {}, {} ]
db.users.find( { $or : [ {age : 28}, {married : true} ]  } )

// Menentukan kolom tertentu
// Menampilkan kolom name dan age saja.
db.users.find({}, {_id: 0,name : 1, age: 1})




















