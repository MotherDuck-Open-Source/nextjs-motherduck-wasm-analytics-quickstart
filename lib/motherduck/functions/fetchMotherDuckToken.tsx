// This function fetches a MotherDuck token for the frontend to use to connect to MotherDuck.
// read_scaling: true fetches a new read-scaling token with a set expiration time.
export async function fetchMotherDuckToken(read_scaling: boolean = true): Promise<string> {
    const response = await fetch(`/api/md-token?read_scaling=${read_scaling}`)
    const { mdToken } = await response.json()
    return mdToken
}
