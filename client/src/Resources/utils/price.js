export default function calcPriceFromLatLng(
  pickup,
  destination,
  to_string = false
) {
  const R = 6371e3; //Radius of the earth in metres

  const φ1 = (pickup.latlng.lat * Math.PI) / 180; // φ, λ in radians
  const φ2 = (destination.latlng.lat * Math.PI) / 180;
  const Δφ = ((destination.latlng.lat - pickup.latlng.lat) * Math.PI) / 180;
  const Δλ = ((pickup.latlng.lng - destination.latlng.lng) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const price = Math.round(((R * c) / 10) * 100) / 100;

  return price;
}

export const currencyToString = (currency) =>
  currency.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
