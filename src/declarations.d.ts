declare module "types" {
  export type StateType = StateType<typeof rootReducer>;

  interface FetchInfo {
    fetching: boolean;
    error: error;
  }
}
