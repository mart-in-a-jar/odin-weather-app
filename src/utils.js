import { format, setDefaultOptions, fromUnixTime } from "date-fns";
import { nb } from "date-fns/locale";

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function round(num) {
    return Math.round(+num * 10) / 10;
}

setDefaultOptions({
    locale: nb,
});

function formatDate(date) {
    return format(fromUnixTime(date), "HH:mm");
}

export { capitalize, round, formatDate };