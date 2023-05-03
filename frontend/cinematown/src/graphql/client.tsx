import { createClient } from "@urql/core";

export var client: any = createClient({ url: `http://localhost:8080/graphql` });