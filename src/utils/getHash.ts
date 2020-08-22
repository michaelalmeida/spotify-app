interface HashProps {
  access_token: string;
  expires_in: string;
  token_type: string;
}

const getHash = (): string => {
  return window.location.hash.substring(1).split("&")[0].split("=")[1];
};

export default getHash;
