var iFileName = "Odyssey_of_the_Dragonlords.js";
RequiredSheetVersion(12.999);

SourceList["OoftheD"] = {
  name : "Odyssey of the Dragonlords",
  abbreviation : "OoftheD",
  url : "https://www.kickstarter.com/projects/arcanumworlds/odyssey-of-the-dragonlords-5th-edition-adventure-b",
  date : "2019/09/20",
};

RaceList["thyleacnentaur"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets []
	regExpSearch : /^(?=.*centaur)(?=.*thylean).*$/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "something" and "catlike" in it, disregarding capitalization). If this looks too complicated, just write: /something catlike/i
	name : "Thylean Centaur", //required; the name to use for the race
	source : ["OoftheD", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]	
	plural : "Centaurs", //required; the name to use for the race when the plural form is used
	size : 3, //required;  the size of the race (Gargantuan = 0, Huge = 1, Large = 2, Medium = 3, Small = 4, Tiny = 5)
	speed : { //required; This sets a value for one or more speed modes, and/or a value to be added to a specific speed mode or to all speed modes // the attributes of this object can be "walk", "burrow", "climb", "fly", "swim", and "allModes"
		// all of the following attributes are optional and you can add more ("burrow" isn't part of this example!)
		walk : { spd : 40, enc : 20 }, // the objects "walk", "burrow", "climb", "fly", "swim" are all the same, they are an object with two attributes, 'spd' for the speed in feet, and 'enc' for the encumbered speed in feet.		
	},
	languageProfs : ["Common", "Sylvan"], // optional; this is an array of the language proficiencies gained. An entry can either be 1) a string that represents the language learned or 2) a number which is the number of language gained that can be chosen by the player
	weapons : ["Charge"], //optional; an array of weapons that are added to the attacks section; This will be the name of the weapon how it appears in the attack section, not necessarily the object name in the WeaponsList
	age : " mature at the same rate as humans", //optional; the age tooltip/mouseover text (will be displayed in combination with the "plural" entry)
	height : " range from 6 to over 7 feet tall", //optional; the height tooltip/mouseover text (will be displayed in combination with the "plural" entry)
	weight : " weigh between 700 and 900 lb", //optional; the weight tooltip/mouseover text (will be displayed in combination with the "plural" entry)
	improvements : "Centaur: +1 Wisdom, +2 Strength;", //required; the text that is displayed when listing all the ability score improvements
	scores : [2, 0, 0, 0, 1, 0], //required; the ability score improvements as used by the Ability Score dialog. The syntax is: [Str, Dex, Con, Int, Wis, Cha]
	trait : "Centaur (+1 Wisdom, +2 Strength)\nMountable:\n As a bonus action on your turn, you may allow a single willing ally\n within 5 feet of you to hitch a brief ride on your back. They are carried on your back until the end of your turn, at which point they must dis-embark within 5 feet of you. While being carried, your rider is not considered to be mounted and they are not vulnerable to attacks of opportunity. Your rider must be a bipedal creature of your size or smaller. \nQuadrapedal Stride. \nClimbing or maneuvering in tight spaces is considered difficult terrain for you.\nCharge. \nIf you move 30 feet straight toward a target and then hit them with a melee attack \non the same turn, the target takes an extra ld6 damage from the first attack.", //required; the racial trait as it will be put in the Racial Trait field on the second page (note that "\n" is a line break).
	features : { //optional; the racial features. Each works the same way, so only a couple of example are given. You can add as many as you want. If the race has no level-dependent or limited features, you can just delete the whole feature entry all together
		"mountable" : { //note the use of lower case characters
			name : "Mountable", //required; the name of the racial feature
			minlevel : 1, //required; the level at which the feature is gained			
			action : ["bonus action", "Mountable"], //optional; adds the name of the feature to the action list when chosen. The options are "action", "bonus action", and "reaction" //the second value in the array is added as a suffix for the "name" of the feature when entered into the action field
			},
		
		"breath weapon" : {
			name : "Charge",
			minlevel : 1,
			usages : 1,
			additional : ["1d6"],  //optional; text to display in the description field of the limited feature. This can be one value, but can also be an array of 20 values, one for each level.
			tooltip : "",
		},
		},
};
CreatureList["stimfay"] = {
  name : "Stimfay",
  source : ["OoftheD", 334],
  size : 5,
  type : "Beast", // Stimfay is a Construct but Ranger companion requires Beast type for it to be available
  subtype : "",
  alignment : "Unaligned",
  ac : 13,
  hp : 21,
  hd : [6, 6],
  speed : "10 ft, fly 80 ft",
  scores : [10, 15, 10, 6, 8, 7],
  saves : ["", "", "", "", "", ""],
  skills : {
    "perception" : 3,
  },
  damage_immunities : "fire, poison, psychic",
  condition_immunities : "poisoned, charmed",
  senses : "Darkvision 60 ft",
  passivePerception: 13,
  languages : "",
  challengeRating : "1/4", // Stimfay is 1/2 but Ranger companion requires 1/4 rating for it to be available
  proficiencyBonus : 2,
  attacksAction : 1,
  attacks : [{
    name : "Talons",
    ability : 2,
    damage : [1, 6, "slashing"],
    range : "Melee (5 ft)",
    description : "",
    modifiers : ["", "", ""],
  },
    {
      name : "Pinion Storm",
      ability : 2,
      damage : [1, 6, "piercing"],
      range : "Ranged (60 ft)",
      description : "",
      modifiers : ["", "", ""],
    },
    {
      name : "Piercing Screech",
      ability : 3,
      damage : [1, 6, "psychic"],
      dc : true,
      range : "Ranged (60 ft)",
      description : "Con save; fail\u2015 deafened",
      modifiers : ["", "", ""],
    },
  ],

  actions : [{
    name : "Automated Helper",
    description : "The stimfay can carry a single potion and administer it to any willing creature as an action. Additionally, the stimfay can use a bonus action to stabilize a dying creature that it can touch.",
  },
  ],

  traits : [{
    name : "Keen Sight",
    description : "The stimfay has advantage on Wisdom (Perception) checks that rely on sight.",
  },
    {
      name : "Immutable Form",
      description : "The stimfay is immune to any spell or effect that would alter its form.",
    },
    {
      name : "Distracting Nuisance",
      description : "When the stimfay successfully hits a creature with its talons, that creature cannot make opportunity attacks until the beginning of its next turn.",
    },
  ],
};

SpellsList["animal polymorph"] = {
  name : "Animal Polymorph",
  classes : ["druid", "ranger", "sorcerer"],
  source : ["OoftheD", 340],
  level : 3,
  school : "Trans",
  time : "1 a",
  range : "60 ft",
  components : "V,S",
  duration : "Conc, 10 min",
  save : "Wis",
  description : "1 creature transformed into beast of choice of 1 CR or lower; see book",
  descriptionFull : "This spell transforms a creature you can see within range into a new beast form. An unwilling creature must make a Wisdom saving throw to avoid the effect. A shapechanger automatically succeeds on this saving throw." + "\n   " + "The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be any beast of CR 1 or less that does not have a fly speed. While in this new form, the target is charmed by you and views you as a trusted ally. The target can understand simple commands such as “attack” or “stay.” The charm affects creatures that are immune to charm in their normal form. The charm ends immediately when the target reverts to its normal form." + "\n   " + "The target’s game statistics, including mental ability scores, are replaced by the statistics of the chosen beast. It retains its alignment and personality. The creature is limited in the actions it can perform by the nature of its new form, and it can’t speak, cast spells, or take any other action that requires hands or speech. The creature's gear melds into its new form. The creature can’t activate, use, wield, or otherwise benefit from any of its equipment." + "\n   " + "The target assumes the hit points of its new form. When it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form.",
  ritual : false,
  psionic : false,
  dependencies : [],
};

SpellsList["bond of the dragonlords"] = {
  name : "Bond of the Dragonlords",
  classes : ["paladin"],
  source : ["OoftheD", 340],
  level : 2,
  school : "Ench",
  time : "1 min",
  range : "Touch",
  components : "V,M\u2020",
  compMaterial : "Unhatched dragon egg; magical armor/weapon worth at least 5,000gp with the spell consumes",
  duration : "Special",
  description : "You bond a dragon and can fight alongside it; see book",
  descriptionFull : "You permanently bond with a newly-hatched metallic dragon. This requires you to locate an unhatched dragon egg and spend 1d4 days nurturing the egg so that it hatches. The hatchling may be any of the following types of dragon wyrmling: brass, bronze, copper, or silver." + "\n   " + "You can confer the bond to another recipient who you are touching when you cast the spell. A dragon that has been bonded can never be bonded with another target. Likewise, this spell cannot be used to bond more than one dragon to any individual." + "\n   " + "Wyrmlings cannot be used as mounts until they grow into young dragons. A dragon cannot use legendary actions while it is being used as a mount." + "\n   " + "Controlling the Dragon. Your dragon moves and acts on your initiative. You can decide how the dragon moves and attacks. While your dragon is fighting alongside you, it loses its multiattack feature. If your dragon has a breath weapon, it can be used once, and it recharges after you and the dragon complete a long rest." + "\n   " + "If your bonded dragon dies, you will also die within 24 hours unless the dragon is returned to life. You cannot be raised from the dead unless your bonded dragon is alive.",
  ritual : false,
  psionic : false,
  dependencies : [],
};

SpellsList["dirge of the dragonlords"] = {
  name : "Dirge of the Dragonlords",
  classes : ["bard", "cleric", "paladin"],
  source : ["OoftheD", 340],
  level : 3,
  school : "Necro",
  time : "1 hr",
  range : "Touch",
  components : "V,M\u2020",
  compMaterial : "Gems and coins worth at least 1,000gp, which the spell consumes",
  duration : "Instantaneous",
  description : "Return a dead bonded dragon to life with 1hp and whole body; see book",
  descriptionFull : "You return a dead dragon that is bonded to a dragonlord back to life. The dragon returns to life with 1 hit point. All of the dragon's mortal wounds are closed, and any missing body parts are restored." + "\n   " + "This spell also neutralizes any poisons and cures nonmagical diseases that affected the dragon at the time it died. This spell doesn’t, however, remove magical diseases, curses, or similar effects; if these aren’t first removed prior to casting the spell, they take effect when the dragon returns to life.",
  ritual : false,
  psionic : false,
  dependencies : [],
};

SpellsList["fatebinding"] = {
  name : "Fatebinding",
  classes : ["bard", "cleric", "warlock", "wizard"],
  source : ["OoftheD", 340],
  level : 3,
  school : "Necro",
  time : "1 a",
  range : "30 ft",
  components : "V",
  duration : "1 h",
  save : "Cha",
  description : "2 creatures share hp reductions and increases",
  descriptionFull : "Choose two creatures that you can see. Both creatures must make Charisma saving throws, and they do so with advantage if they are hostile to you. If a creature is charmed by you, it has disadvantage on this saving throw. If both creatures fail their saving throws, then their fates are now bound together." + "\n   " + "Whenever one of the creatures takes damage, the other creature takes an identical amount of damage, unless both creatures took damage from the same single source, such as a fireball spell." + "\n   " + "Whenever one of the creatures regains hit points, the other creature regains an identical number of hit points, unless both creatures regained hit points from the same single source, such as mass cure wounds." + "\n   " + "The two target creatures remain fate-bound for the duration of the spell, even if both targets are on different planes of existence.",
  ritual : false,
  psionic : false,
  dependencies : [],
};

SpellsList["seeds of death"] = {
  name : "Seeds of Death",
  classes : ["druid", "sorcerer", "warlock", "wizard"],
  source : ["OoftheD", 341],
  level : 6,
  school : "Necro",
  time : "1 a",
  range : "30 ft",
  components : "V,S,M",
  compMaterial : "3+ minotaur teeth and alchemical fertilizer worth more than 100gp",
  duration : "Conc, 10 min",
  description : "3+SL minotaur skeletons appear under your control",
  descriptionFull : "You throw three minotaur teeth on to the ground in front of you. At the start of your next turn, three minotaur skeletons erupt from the ground, fully formed. You can use a bonus action to shout commands at the minotaur skeletons if they are within 100 ft. of you. Your commands must be general orders, such as 'attack that enemy' or 'guard this room.' Once given an order, the minotaur skeletons will continue to follow it until the task is complete or until you issue another command. If the minotaur skeletons are given no commands, they will attack the nearest creature. When the spell ends, the minotaur skeletons dissolve into bone dust." + "\n   " + "At Higher Levels. When you cast this spell using a spell slot of 7th level or higher, you animate an extra minotaur skeleton for each slot level above 6th.",
  ritual : false,
  psionic : false,
  dependencies : [],
};

SpellsList["sleeping draught"] = {
  name : "Sleeping Draught",
  classes : ["bard", "wizard"],
  source : ["OoftheD", 341],
  level : 2,
  school : "Ench",
  time : "1 a",
  range : "20 ft",
  components : "V,S,M",
  compMaterial : "draught of liquid",
  duration : "1 min",
  description : "Target w/ <9d8+3d8/SL hp is unconscious, otherwise half speed, no reactions, only one attack per turn",
  descriptionFull : "You open a draught and a purple mist flows from you to a target creature. Roll 9d8; if the target creature has fewer hit points than the total, then it falls unconscious. The target remains unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. If the target creature has more hit points than the rolled total, then it becomes drowsy and its speed is halved, it can’t take reactions, and it can’t make more than one melee or ranged attack during its turn. The target remains drowsy until it takes damage or until the spell ends." + "\n   " + "Undead and creatures that are immune to being charmed aren’t affected by this spell." + "\n   " + "At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, roll an additional 3d8 for each slot level above the 2nd.",
  ritual : false,
  psionic : false,
  dependencies : [],
};

SpellsList["sword of fate"] = {
  name : "Sword of Fate",
  classes : ["bard", "cleric", "warlock", "wizard"],
  source : ["OoftheD", 341],
  level : 5,
  school : "Illus",
  time : "1 a",
  range : "60 ft",
  components : "V",
  duration : "1 hr",
  description : "10d8 slashing dmg if breaks condition: harm, magic, or leave. See book",
  descriptionFull : "Choose a creature that you can see. You create an illusionary sword that hangs above that creature's head. Everyone with line of sight can see the sword except for the affected creature. When you cast the spell you must shout out one of the following conditions:" + "\n   " + "You cannot harm us. The target creature breaks this condition if they target the spell caster or a companion with an attack or a spell that causes damage." + "\n   " + "You cannot use magic. The target creature breaks this condition if they cast a spell." + "\n   " + "You cannot leave this area. The target creature breaks this condition if it moves more than 30 feet from the spot it was standing when the spell was cast." + "\n   " + "If the target creature breaks the condition, it takes 10d8 slashing damage as the blade becomes real and slices downward. If the target is reduced to 0 hit points, then one of its heads is removed. If the creature has no remaining heads, then it is instantly killed." + "\n   " + "The sword of fate can be dispelled. In addition, remove curse will end the spell on the target.",
  ritual : false,
  psionic : false,
  dependencies : [],
};

SpellsList["theogenesis"] = {
  name : "Theogenesis",
  classes : ["cleric", "sorcerer", "wizard"],
  source : ["OoftheD", 341],
  level : 9,
  school : "Conj",
  time : "1 h",
  range : "Touch",
  components : "V,S,M\u2020",
  compMaterial : "offerings worth at least 10,000 gp, which are consumed, and all three Divine Artifacts: the Caduceus, the Ambrosia, and the Promethean fire",
  duration : "Special",
  description : "Mortal creature gains a divine spark; see book",
  descriptionFull : "Theogenesis is a powerful spell that is used to place a divine spark into a mortal creature, unlocking the potential to ascend to godhood. The artifacts are not consumed when the spell is cast, but the offerings are." + "\n   " + "Choose a single target (non-divine) creature for the spell. You must remain in contact with the target for the duration of the casting. If contact is broken, both you and the target take 20d6 radiant damage, and both the spell and the offering are wasted. If the spell is successfully cast, then one of the greater gods must decide whether or not to grant the divine spark. The creature's relationship with the god determines its chance of success, and the base chance is 0%. Each of the bonuses below are cumulative:" + "\n   " + "The target shares at least one alignment axis with the greater god: +20%" + "\n   " + "The target has the exact same alignment as the greater god: +20%" + "\n   " + "The target has faithfully worshipped a god in the same pantheon for at least a year: +20%" + "\n   " + "The target has faithfully worshipped the greater god for at least a year: +30%" + "\n   " + "Failure means that the greater god decides not to grant the divine spark. That greater god can’t be chosen again if the spell is cast on the same target. Success means that the target has been permanently granted a divine spark. It can only be removed with a wish spell.",
  ritual : false,
  psionic : false,
  dependencies : [],
};

WeaponsList["chakram"] = {
  regExpSearch : /^(?=.*chakram).*$/i,
  name : "Chakram",
  source : ["OoftheD", 334],
  list : "ranged",
  ability : 2,
  type : "Martial",
  damage : [1, 6, "slashing"],
  range : "60/120 ft",
  description : "Light, finesse, thrown, special: Chakram returns unless natural 1 attck",
  abilitytodamage : true,
  weight : 2,
  monkweapon : false,
};

AddSubClass("paladin", "oath of the dragonlord", {
  regExpSearch : /^(?=.*dragonlord).*$/i,
  subname : "Oath of the Dragonlord",
  source : ["OoftheD", 330],
  features : {
    "subclassfeature3" : {
      name : "Channel Divinity: Dragon's Wrath",
      source : ["OoftheD", 330],
      minlevel : 3,
      description : "\n   " + "As an action, each creature within 60 ft of me and aware of me must make a Wis save" + "\n   " + "If it fails this save, it is frightened for 1 minute or until it succeeds on a save at the end of its turn",
      action : ["action", ""],
      spellcastingExtra : ["hunter's mark", "find familiar", "gust of wind", "levitate", "fly", "haste", "freedom of movement", "stoneskin", "hold monster", "telepathic bond"]
    },

    "subclassfeature3.1" : {
      name : "Channel Divinity: Scorn the Unworthy",
      source : ["OoftheD", 330],
      minlevel : 3,
      description : "\n   " + "As an action, each creature within 30 ft of me that are Large or smaller must make a Cha save" + "\n   " + "If it fails this save, it falls prone and loses concentration on any active spell",
      action : ["action", ""]
    },

    "subclassfeature3.2" : {
      name : "Pseudodragon Familiar",
      source : ["OoftheD", 330],
      minlevel : 3,
      description : "\n   " + "Find Familiar summons a psuedodragon that can find a dragon's egg within a mile" + "\n   " + "If no egg found by 6th level, it will take 3d6 days and return with a brass, bronze, copper, or silver (my choice)" + "\n  "  + "If egg is lost or destroyed, it will take 3d6 days for a replacement" + "\n  " + "If I delibrately lost or destroyed the egg, it will refuse to find anymore",
    },

    "subclassfeature7" : {
      name : "Dragonlord's Bond",
      source : ["OoftheD", 333],
      minlevel : 7,
      description : "\n   " + "My dragon egg hatches and I must cast 'bond of the dragonlord' within 24 hours" + "\n   " + "My wyrmling has HP of 30 + (Paladin level * 2)",
      spellcastingExtra : ["hunter's mark", "find familiar", "gust of wind", "levitate", "fly", "haste", "freedom of movement", "stoneskin", "hold monster", "telepathic bond", "bond of the dragonlord", "dirge of the dragonlord"]
    },

    "subclassfeature15" : {
      name : "Young Dragon",
      source : ["OoftheD", 333],
      minlevel : 15,
      description : "\n   " + "My dragon is now a young dragon and can be used as a mount" + "\n   " + "While mounted, I gain dragon's resistance, immunities, and senses (blindsight, darksight, and passive perception)"
    },

    "subclassfeature20" : {
      name : "Unbreakable Bond",
      source : ["OoftheD", 333],
      minlevel : 20,
      description : "\n   " + "My dragon has Multiattack and normal breath weapon rules"
    },

    "subclassfeature20.1" : {
      name : "Legendary Resistance",
      source : ["OoftheD", 333],
      minlevel : 20,
      description : "\n   " + "My dragon can succeed on a failed saving throw; My dragon can use this once per long rest",
      usages : 1,
      recovery : "long rest"
    },
  }
}
);

AddSubClass("druid", "circle of sacrifice", {
  regExpSearch : /^(?=.*sacrifice).*$/i,
  subname : "Circle of Sacrifice",
  source : ["OoftheD", 327],
  features : {
    "subclassfeature2" : {
      name : "Ritual of Sacrifice",
      source : ["OoftheD", 327],
      minlevel : 2,
      description : "\n   " + "Add Wis mod to produce flame damage roll",
      spellcastingExtra : ["produce flame"]
    },

    "subclassfeature2.1" : {
      name : "Ritual of Sacrifice: Immolation",
      source : ["OoftheD", 327],
      minlevel : 2,
      description : "\n   " + "Immolate creature with 0 hp and 60ft allies and I gain bless for 1 min",
      usages : "Wisdom modifier per ",
      usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
      recovery: 'short rest',
    },

    "subclassfeature6" : {
      name : "Ritual of Mistletoe",
      source : ["OoftheD", 327],
      minlevel : 6,
      description : "\n   " + "Cast detect magic, cure wounds, purify food and drink, or heroism as 1st level w/o spell slot",
      additional : ["", "", "", "", "", "d4", "d4", "d4", "d4", "d6", "d6", "d6", "d6", "d8", "d8", "d8", "d8", "d8", "d8", "d8"],
      usages : [0, 0, 0, 0, 0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      action : ["bonus action", ""],
      recovery: 'long rest',
    },

    "subclassfeature10" : {
      name : "Keeper of the Law: Sacrificial Offering",
      source : ["OoftheD", 327],
      minlevel : 10,
      description : "\n   " + "Mark a creature and use reaction on ally hit to add mistletoe damage",
      action : ["bonus action", ""],
    },

    "subclassfeature10.1" : {
      name : "Keeper of the Law: Restoration Ritual",
      source : ["OoftheD", 327],
      minlevel : 10,
      description : "\n   " + "Expend two mistletoes to cast lesser restoration",
      action : ["action", ""],
    },

    "subclassfeature14" : {
      name : "Astrological Wisdom",
      source : ["OoftheD", 327],
      minlevel : 14,
      description : "\n   " + "Spend 8 hrs and 12,000gp to build stone circle" + "\n    " + "This is a permanent anchor point for teleportation circle",
      spellcastingExtra : ["produce flame", "teleportation circle"]
    },
  }
}
);

AddSubClass("ranger", "amazonian conclave", {
  regExpSearch : /^(?=.*amazonian).*$/i,
  subname : "Amazonian Conclave",
  source : ["OoftheD", 333],
  features : {
    "subclassfeature3" : {
      name : "Amazonian Battlecry",
      source : ["OoftheD", 333],
      minlevel : 3,
      description : desc([
        "For 1 minute or I take damage or knocked unconcious,",
        "I have advantage against favored enemy type and frightened or paralyzed saving throws",
        "and I have resistance to bludgeoning, piercing, and slashing",
      ]),
      action : ["bonus action", ""],
      usages : "Wisdom modifier per ",
      usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
      recovery: 'long rest',
    },

    "subclassfeature3.1" : {
      name : "Amazonian Magic",
      source : ["OoftheD", 333],
      minlevel : 3,
      description : "\n   " + "I get bonus spells known,  which do not count against the number of spells I can know",
      spellcastingExtra : ["command", "find steed", "haste", "confusion", "mislead"].concat(new Array(95)).concat("AddToKnown"),
    },

    "subclassfeature3.2" : {
      name : "Stimfay Companion",
      source : ["OoftheD", 333],
      minlevel : 3,
      description : desc([
        "It adds your proficiency bonus to its attacks, damage, saving throws, and ability saves",
        "It has hp equal to 15 plus my ranger level",
        "It regains any lost hp during a long rest",
        "In areas open to the sky, it can spend 10 minutes scouting 1 mile radius",
      ]),
      eval : "amazonion_conclave_functions.add(newClassLvl.ranger);",
      removeeval : "amazonion_conclave_functions.remove();",
      changeeval : "amazonion_conclave_functions.update(oldClassLvl.ranger, newClassLvl.ranger);"
    },

    "subclassfeature5" : {
      name : "Bracer Reflection",
      source : ["OoftheD", 333],
      minlevel : 5,
      description : "\n   " + "+5 AC until start of next turn",
      action : ["reaction", ""],
      usages : "Wisdom modifier per ",
      usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
      recovery: 'short rest',
    },

    "subclassfeature7" : {
      name : "Chakram Technique",
      source : ["OoftheD", 334],
      minlevel : 7,
      description : "\n   " + "Successful ranged attack affects additional creatures within 10 ft that fail Dex save",
    },

    "subclassfeature11" : {
      name : "Improved Falconry",
      source : ["OoftheD", 334],
      minlevel : 11,
      description : desc([
        "My stimfray gains an AC bonus equal to profriciency bonus",
        "It has hp equal to 30 plus my ranger level",
        "It's damage dice for all attacks is 2d6 and magical",
        "It can take any damage targeting me if within 60 ft and functional",
      ]),
    },

    "subclassfeature15" : {
      name : "Pressure Points",
      source : ["OoftheD", 334],
      minlevel : 15,
      description : "\n   " + "Target makes Cons save and if fails, paralyzed for 1 minute",
      action : ["bonus action", ""],
      usages : "Wisdom modifier per ",
      usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
      recovery: 'short rest',
    },
  }
}
);

amazonion_conclave_functions = {
  add : function(rlvl) {
    if (rlvl < 3) return;
    var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
    var prefix = false;
    if (AScompA) {
      for (var a = 1; a < AScompA.length; a++) {
        if (!What(AScompA[a] + 'Comp.Race')) {
          prefix = AScompA[a];
          break;
        }
      }
    }
    if (!prefix) prefix = DoTemplate('AScomp', 'Add');
    Value(prefix + 'Comp.Race', 'Stimfay');
    var theType = tDoc.getField(prefix + 'Comp.Type');
    theType.readonly = true;
    if (!typePF) theType.textSize = 0;
    theType.value = 'Construct';
    for (var a = 1; a <= 3; a++) {
      AddToModFld(prefix + 'BlueText.Comp.Use.Attack.' + a + '.To Hit Bonus', "oProf", false, "Stimfay Companion", "The Stimfay adds the ranger's proficiency bonus (oProf) to the to hit bonus of its attacks.");
      AddToModFld(prefix + 'BlueText.Comp.Use.Attack.' + a + '.Damage Bonus', "oProf", false, "Stimfay Companion", "The Stimfay adds the ranger's proficiency bonus (oProf) to the damage of its attacks.");
    }
    Value(prefix + 'Cnote.Left',
      "Stimfay Companion (Odyssey of the Dragonlords 333):" +
      "\n\u2022 I construct a Stimfay with an appearance of either an eagle, harrier," +
      "\n   hawk, kite, osprey, owl, or archaeopteryx" +
      "\n\u2022 I'm the only that understand its speach and it understands my commands" +
      "\n\u2022 I can command it to scout for 10 minutes and report back what it sees in 1 mile radius" +
      "\n\u2022 The stimfay adds my proficiency bonus to attack rolls, damage rolls," +
      "\n   as well as its saving throws and ability save DCs" +
      "\n\u2022 Maximum hit points is equal to 15 + ranger level" +
      "\n\u2022 It regains all its hit points after a long rest" +
      "\n\u2022 If it is destroyed, I can fully repair it after 8 hours" +
      "\n Don't remove this companion page as you can't recreate it later"
    );
  },
  remove : function() {
    var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
    if (AScompA) {
      for (var a = 1; a < AScompA.length; a++) {
        if (What(AScompA[a] + 'Comp.Type') == 'Construct') {
          DoTemplate("AScomp", "Remove", AScompA[a]);
          return;
        }
      }
    }
  },
  update : function(oldLvl, newLvl) {
    if (newLvl < 3) return;
    var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
    var prefix = false;
    if (AScompA) {
      for (var a = 1; a < AScompA.length; a++) {
        if (What(AScompA[a] + 'Comp.Type') == 'Construct') {
          prefix = AScompA[a];
          break;
        }
      }
    }
    if (!prefix) return;

    app.alert({
      cMsg : "In update " + What(prefix + 'Comp.Use.AC') + " : " + How(prefix + 'Comp.Use.AC') + " : " + How('Proficiency Bonus') + " : " + What('Proficiency Bonus'),
      nIcon : 3,
      cTitle : "Updating"
    })
    // Update the stats
    if (newLvl < 11) {
      Value(prefix + "Comp.Use.HP.Max", Math.round(newLvl + 15));

      if (oldLvl >= 11) {
        for (var a = 1; a <= 3; a++) {
          var theFld = prefix + "BlueText.Comp.Use.Attack." + a + ".Damage Die";
          var theDmgDie = What(theFld);
          Value(theFld, theDmgDie.replace(/2d6/i, "1d6"));
        }
      }
    } else {
      Value(prefix + "Comp.Use.HP.Max", Math.round(newLvl + 30));
      Value(prefix + 'Comp.Use.AC', Number(What(prefix + 'Comp.Use.AC')) + Number(How('Proficiency Bonus')));

      if (oldLvl < 11) {
        for (var a = 1; a <= 3; a++) {
          var theFld = prefix + "BlueText.Comp.Use.Attack." + a + ".Damage Die";
          var theDmgDie = What(theFld);
          Value(theFld, theDmgDie.replace(/1d6/i, "2d6"));
        }
      }
    }
  }
};