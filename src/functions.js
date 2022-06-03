const API_URL = process.env.REACT_APP_API_URL;

export const getMembers = async () => {
    const response = await fetch(`${API_URL}/`, {mode: 'cors'});
    const responseJson = await response.json();
    return responseJson
}

export const addMember = async (newMember) => {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        name: newMember.name.trim(),
        qualifiers: newMember.qualifiers
      })
    })
    const responseJson = response.json();
    return responseJson
}

export const qualifiersToString = (newMember) => {
  const str = newMember.qualifiers.join(', ').replace(/, ([^,]*)$/, ' et $1');
  return str
}