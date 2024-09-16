export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addUserName' : IDL.Func([IDL.Text], [], []),
    'generateName' : IDL.Func([], [IDL.Text], []),
    'getUserNames' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
