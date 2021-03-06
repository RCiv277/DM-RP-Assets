const mongoose = require('mongoose')
const User = require('./user')

const characterSchema = new mongoose.Schema({
    name: {type: String , maxlength: 20, required: true},
    class: {},
    specialization: {type: String},   //Default to the Class
    flaws:{type: String},
    appearence: {type: String},
    level: {type: Number, min: 1, max:20},
    race: {type:String ,maxlength: 10},
    subrace:{type: String},
    backstory:{type:String, default:`${this.name} does not have their backstory recorded on the site as of yet.`},
    relations: {type:String, default: 'No Recorded Faction/Npc Relations.'},
    personality:{type:String},
    feature:{type:String},
    appearence:{type:String},
    owner: {}
})


module.exports = mongoose.model("Character" , characterSchema)

//['Artificer','Barbarian','Bard','Cleric','Druid','Fighter','Paladin','Ranger','Rogue','Sorceror','Warlock','Wizard']