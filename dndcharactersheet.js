const fs = require('fs')
const http = require('http')

let genderPool = ["male", "female", "attack helicopter", "snowflake"];

let racePool = ["elf", "dwarf", "half-orc",
                "halfling", "gnome", "Half-elf", "Dragonborn",
                "Tiefling", "Orc", "Eladrin", "Githyanki",
                "Hobgoblin", "Changeling", "Goblin", "Arakocra", "Kobold",
                "Bugbear", "Aasimar", "Goliath", "Genasi", "Minotaur", 
                "Kenku", "Lizardfolk", "Warforged" ];

let professionPool = ["General Store Keeper", "Tavern/Inn-Keeper", "Guard", "Sherrif", "Gaurd-Captain",
    "Constable", "Magistrate", "Master of Ceremony", "Food Vendor", "Pawn Shop Owner", "Magic Merchant",
    "Teleportation Circle Steward", "Arborist", "Botanical Gardener", "Lyceum Scholar", "Instructor",
    "Gladiator", "Slaver", "Fighting Pit Master", "Clay Mason", "Stone Mason", "Printer", "Carpenter",
    "Wood-Worker", "Apothecary Owner", "Pharmacist", "Alchemist", "Butcher", "Smoke Shop Tobacconist",
    "Baker", "Candlestick Maker", "Fletcher", "Bowyer", "Tailor", "Smith", "Ferrier", "Jeweler", "Trapper",
    "Falconer", "Tanner", "Herdsman/Sheppard", "Farmer", "Cartographer", "Librarian", "Book Store Clerk",
    "Florist", "Menagerist", "Miner", "Slave", "Serf", "Artisan", "Painter", "Pottery Mason", "Priest",
    "Madhouse Caretaker", "Noble", "Mayor", "Knight", "Baron", "Duke", "Monarch", "Emperor", "Council Member",
    "Cooper", "Gongfarmer", "Cobbler", "Glass Blower", "Courier", "Stablehand", "Doctor", "Plaguedoctor",
    "Midwife", "Brewer", "Winemaker", "Barber", "Streetcleaner", "Chimneysweep", "Maid/Butler", "Lawyer",
    "Academic/Scribe", "Oracle", "Beggar", "Town Crier", "Grave Digger", "Wainwright", "Caravansary",
    "Dockworker", "Sailor", "Whore", "Escort", "Shipwright", "Guildmaster/member", "Grange Foreman",
    "Spinster", "Bathhouse Worker", "Thatcher", "Roofer", "Miller", "Wheelwright", "Banker", "Veterinarian",
    "Washer", "Waterbearer", "Criminal", "Armorer", "Carriage Driver", "Gambler", "Lamplighter", "Lumberjack",
    "Ratter", "Dyer", "Rope Maker", "Sail Maker", "Cultist", "Tax Collector", "Loanshark", "Orphanage Caretaker",
    "Advisor", "Philosopher", "Parchment Maker", "Soldier", "Squire", "Soap Maker", "Parchment Maker", 
    "Jailer", "Bailiff", "Lector", "Mudlark", "Stable Master", "Groomer"];

let classPool = ["Fighter", "Cleric", "Wizard", "Bard", "Paladin", "Monk", "Ranger", "Rogue", "Druid",
                 "Barbarian", "Sorcerer", "Warlock"];

let armorPool = [];

let weaponPool = [];

const character = {
    gender: "gender",
    race: "race",
    name: "name",
    age: "age",
    class: "class",
    profession: "profession"
};

var charArmor = {
    head: "head",
    chest: "chest",
    shoulders: "shoulders",
    gloves: "gloves",
    waist: "waist",
    legs: "legs",
    feet: "feet"
};

var charWeapons = {
    mainHand: "main hand",
    offHand: "off hand",
    secondary: "secondary",
    knife: "knife"
};

function getGender(genderPool){
    return gender[Math.floor(Math.random()*genderPool.length)]
};

function getRace(racePool){
    return race[Math.floor(Math.random()*racePool.length)]
};

function getProfession(professionPool){
    return profession[Math.floor(Math.random()*professionPool.length)]
};

function getClass(classPool){
    return class{[Math.floor(Math.random()*classPool.length)]
}};

function getArmor(armorPool){
    return armor[Math.floor(Math.random()*armorPool.length)]
};

function getWeapons(weaponPool){
    return weapons[Math.floor(math.random()*weaponPool.length)]
};

function createCharacter(){
    getGender()
    getRace()
    getProfession()
    getClass()
    getArmor()
    getWeapons()
    var name = window.prompt("What is your Heroe's name?"); 
    var age = window.prompt("How old is your Hero?");
    console.log("Your Hero" + name + "has been born into the world at" + age + "years old");
};

createCharacter();

//write to file or webpage full charactersheet next//









