import { TypeStore } from "@needle-tools/engine"

// Import types
import { FadeOnProximity } from "../FadeOnProximity";
import { SoundOnProximity } from "../SoundOnProximity";

// Register types
TypeStore.add("FadeOnProximity", FadeOnProximity);
TypeStore.add("SoundOnProximity", SoundOnProximity);
