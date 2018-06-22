class DungeonsHyruleCastleEscape extends Dungeons {
  constructor(name = "Dungeons", subname = "HyruleCastleEscape") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Chest","Sanctuary","23.0%","28.0%",regionName),
//		new Location("Chest","Sewers - Secret Room - Left","26.8%","32.4%",regionName,{equipment:"%%bomb%%/%%boots%%"}),
//		new Location("Chest","Sewers - Secret Room - Middle","26.8%","32.4%",regionName,{equipment:"%%bomb%%/%%boots%%"}),
//		new Location("Chest","Sewers - Secret Room - Right","26.8%","32.4%",regionName,{equipment:"%%bomb%%/%%boots%%"}),
		new Location("Chest","Sewers - Secret Room (3)","26.8%","32.4%",regionName,{equipment:"%%bomb%%/%%boots%%"}),
		new Location("Chest","Sewers - Dark Cross","26.8%","38.0%",regionName,{equipment:"%%lantern%%"}),
//		new Location("Chest","Hyrule Castle - Boomerang Chest","24.9%","44.1%",regionName),
//		new Location("Chest","Hyrule Castle - Map Chest","24.9%","44.1%",regionName),
//		new Location("Chest","Hyrule Castle - Zelda's Cell","24.9%","44.1%",regionName),
		new Location("Chest","Hyrule Castle (3)","24.9%","44.1%",regionName),
//		new Location("NPC","Link's Uncle","29.8%","41.8%",regionName),
		new Location("Chest","Secret Passage (2)","29.8%","41.8%",regionName)
	],this);
  }

  initNoMajorGlitches() {
	this.locations["Sanctuary"].glitchless = function() {
		if(has("state.open")) {												// FIXME: Open State
			return true;
		}
		return canKillMostThings() && has("key");
	}
//	this.locations["Sewers - Secret Room - Left"].glitchless =
//	this.locations["Sewers - Secret Room - Middle"].glitchless =
//	this.locations["Sewers - Secret Room - Right"].glitchless
	this.locations["Sewers - Secret Room (3)"].glitchless = function() {
		if(has("state.open")) {												// FIXME: Open State
			return canLiftRocks() || (has("lantern") && has("key"));
		}
		return canKillMostThings() && has("key");
	}
	this.locations["Sewers - Dark Cross"].glitchless = function() {
		if(has("state.open")) {												// FIXME: Open State
			return has("lantern") && has("key");
		}
		return canKillMostThings() && has("key");
	}
//	this.locations["Hyrule Castle - Boomerang Chest"].glitchless =
//	this.locations["Hyrule Castle - Map Chest"].glitchless =
//	this.locations["Hyrule Castle - Zelda's Cell"].glitchless = function() {
//		if(has("state.open")) {												// FIXME: Open State
//			return has("key");
//		}
//		return canKillMostThings();
//	}
	this.locations["Secret Passage (2)"].glitchless = function() {
		if(has("state.open")) {												// FIXME: Open State
			return true;
		}
		return canKillMostThings();
	}
//	this.locations["Link's Uncle"].glitchless = function() {
//		return new DungeonsHyruleCastleEscape().locations["Sanctuary"].glitchless();
//	}

	this.canEnter.glitchless = function() {
		return true;
	}
	this.canComplete.glitchless = function() {
		if(has("state.open")) {												// FIXME: Open State
			return true;
		}
		return this.locations["Sanctuary"].glitchless();
	}
  }
}
