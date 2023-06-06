import { createClient } from "@urql/core";
import { lazy } from "solid-js";
// we make singelton in that method ...
export var client: any = createClient({ url: `http://localhost:8080/graphql` });