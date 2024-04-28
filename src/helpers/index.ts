import { TOlympus } from "@root/types";

export const OlympusUserFormatted = (users: Array<any>): TOlympus[] => {
  return users?.map((user, index) => {
    return {
      ...user,
      name: `${user.name.first} ${user.name.last}`,
      firstName: user.name.first,
      lastName: user.name.last,
      picture: user.picture.medium,
      isOnline: index % 2 === 0 ? true : false,
    };
  });
};

export const generatorKeys = (key?: string) => {
  return `${Math.random().toString()}-${key}-${Math.random().toString()}`;
};
