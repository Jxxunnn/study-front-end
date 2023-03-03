import { userDetail } from "constants/useDetail";

export default function handler(req, res) {
  res.states(200).json(userDetail);
}
