
const data = {
    id: 11, name: "11"
}
export default function handler(
    req,
    res
) {
    res.status(200).json(data);
}
