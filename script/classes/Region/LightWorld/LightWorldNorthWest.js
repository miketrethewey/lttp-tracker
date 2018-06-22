class LightWorldNorthWest extends LightWorld {
  constructor(name = "LightWorld", subname = "NorthWest") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Pedestal","Master Sword Pedestal","2.5%","3.2%",regionName,{equipment:"%%pendant0%%%%pendant1%%%%pendant2%% (can check with %%book%%)"}),
		new Location("Chest","King's Tomb","30.8%","29.6%",regionName,{equipment:"%%boots%% + %%glove2%%/%%mirror%%"}),
		new Location("Chest","Kakariko Tavern","8.1%","57.8%",regionName),
		new Location("Chest","Chicken House","4.4%","54.2%",regionName,{equipment:"%%bomb%%"}),
//		new Location("Chest","Kakariko Well - Top","1.7%","41.0%",regionName,{equipment:"%%bomb%%"}),
//		new Location("Chest","Kakariko Well - Left","1.7%","41.0%",regionName),
//		new Location("Chest","Kakariko Well - Middle","1.7%","41.0%",regionName),
//		new Location("Chest","Kakariko Well - Right","1.7%","41.0%",regionName),
//		new Location("Chest","Kakariko Well - Bottom","1.7%","41.0%",regionName),
		new Location("Chest","Kakariko Well","1.7%","41.0%",regionName,{equipment:"(4 + %%bomb%%)"}),
//		new Location("Chest","Blind's Hideout - Top","6.4%","41.0%",regionName,{equipment:"%%bomb%%"}),
//		new Location("Chest","Blind's Hideout - Left","6.4%","41.0%",regionName),
//		new Location("Chest","Blind's Hideout - Right","6.4%","41.0%",regionName),
//		new Location("Chest","Blind's Hideout - Far Left","6.4%","41.0%",regionName),
//		new Location("Chest","Blind's Hideout - Far Right","6.4%","41.0%",regionName),
		new Location("Chest","Blind's Hideout","6.4%","41.0%",regionName,{equipment:"(4 + %%bomb%%)"}),
		new Location("Chest","Pegasus Rocks","19.5%","29.3%",regionName,{equipment:"%%boots%%"}),
		new Location("NPC","Bottle Merchant","4.5%","46.8%",regionName,{equipment:"100 Rupees"}),
		new Location("NPC","Magic Bat","16.0%","58.0%",regionName,{equipment:"%%hammer%%/%%boots%% + %%powder%%"}),
		new Location("NPC","Sick Kid","7.8%","52.1%",regionName,{equipment:"%%bottle%%"}),
		new Location("Standing","Lost Woods Hideout","9.4%","13.0%",regionName),
		new Location("Standing","Lumberjack Tree","15.1%","7.6%",regionName,{equipment:"%%agahnim%%%%boots%%"}),
		new Location("Standing","Graveyard Ledge","28.1%","27.0%",regionName,{equipment:"%%mirror%%"}),
		new Location("Standing","Mushroom","6.2%","8.6%",regionName)
	],this);
  }

  initNoMajorGlitches() {
	this.locations["Master Sword Pedestal"].glitchless = function() {
		return has("pendantred") && has("pendantblue") && has("pendantgreen");
	}
	this.locations["King's Tomb"].glitchless = function() {
		let nwdw = new DarkWorldNorthWest();
		nwdw.initNoMajorGlitches();

		return canDash() && (canLiftDarkRocks()
			|| (has("mirror") && has("moonpearl")
				&& nwdw.canEnter.glitchless()));
	}
	this.locations["Pegasus Rocks"].glitchless = function() {
		return canDash();
	}
	this.locations["Magic Bat"].glitchless = function() {
		return has("powder")
			&& (has("hammer")
				|| (has("moonpearl") && has("mirror") && canLiftDarkRocks()));
	}
	this.locations["Sick Kid"].glitchless = function() {
		return has("bottle");
	}
	this.locations["Lumberjack Tree"].glitchless = function() {
		return has("agahnim") && canDash();
	}
	this.locations["Graveyard Ledge"].glitchless = function() {
		let nwdw = new DarkWorldNorthWest();
		nwdw.initNoMajorGlitches();

		return has("mirror") && has("moonpearl")
			&& nwdw.canEnter.glitchless();
	}

	this.canEnter.glitchless = function() {
		return true;
	}
  }

  initOverworldGlitches() {
	this.initNoMajorGlitches();

	this.locations["King's Tomb"].owglitches = function() {
		return canDash() && (canLiftDarkRocks()
			|| (has("mirror") && has("moonpearl")));
	}
	this.locations["Magic Bat"].owglitches = function() {
		let nwdw = new DarkWorldNorthWest();
		nwdw.initOverworldGlitches();

		return has("powder")
			&& (has("hammer")
				|| canDash()
				|| (has("moonpearl") && has("mirror") && canLiftDarkRocks()
					&& nwdw.canEnter.owglitches()));
	}
	this.locations["Graveyard Ledge"].owglitches = function() {
		let nwdw = new DarkWorldNorthWest();
		nwdw.initOverworldGlitches();

		return canDash()
			|| (has("mirror") && has("moonpearl")
				&& nwdw.canEnter.owglitches());
	}
  }

  initMajorGlitches() {
	this.initOverworldGlitches();

	this.locations["King's Tomb"].majorglitches = function() {
		return canDash() && (canLiftDarkRocks()
			|| (has("mirror") && glitchedLinkInDarkWorld()));
	}
	this.locations["Magic Bat"].majorglitches = function() {
		return has("powder")
			&& (has("hammer")
				|| canDash()
				|| has("mirror"));
	}
	this.locations["Graveyard Ledge"].majorglitches = function() {
		return canDash()
			|| (has("mirror") && glitchedLinkInDarkWorld());
	}
  }
}
