import Int "mo:base/Int";

import Array "mo:base/Array";
import Iter "mo:base/Iter";
import Random "mo:base/Random";
import Text "mo:base/Text";
import Option "mo:base/Option";

actor AppForgeAINamer {
    stable var userNames : [Text] = [];

    let prefixes = ["AI", "Smart", "Intelligent", "Auto", "Robo", "Cyber", "Neuro", "Quantum", "Synth", "Cogni"];
    let suffixes = ["Creator", "Builder", "Forge", "Smith", "Architect", "Generator", "Crafter", "Maker", "Constructor", "Developer"];

    public func generateName() : async Text {
        let seed = Random.Finite(await Random.blob());
        let prefixIndex = Option.get(seed.range(10), 0);
        let suffixIndex = Option.get(seed.range(10), 0);
        prefixes[prefixIndex] # suffixes[suffixIndex]
    };

    public func addUserName(name : Text) : async () {
        userNames := Array.append(userNames, [name]);
    };

    public query func getUserNames() : async [Text] {
        userNames
    };
}
