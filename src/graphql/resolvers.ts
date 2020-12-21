import { peopleList } from "../peopleList";
import { IResolvers } from "apollo-server-express";

export const resolvers: IResolvers = {
  Query: {
    people: () => {
      return peopleList
    }
  },
  Mutation: {
    deletePerson: (_root: undefined, { id }: { id: string }) => {
      for (let i = 0; i < peopleList.length; i++) {
        if (peopleList[i].id === id) {
          return peopleList.splice(i, 1)[0];
        }
    }

    throw new Error('delete listing failed')
    
    }
  }
};
