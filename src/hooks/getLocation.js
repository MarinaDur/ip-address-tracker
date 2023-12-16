const apiKey = "at_q501MLUGEw2suLpdtJGl9rYqqtAaL";

export async function getMyLocation(searchVal) {
  try {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&domain=${searchVal}`
    );

    const data = await response.json();

    console.log(data);
    return { data };

    // setIpInfo(data);
  } catch (error) {
    console.log(error.message);
  }
}
