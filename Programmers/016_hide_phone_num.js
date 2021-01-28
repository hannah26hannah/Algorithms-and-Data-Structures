function solution(pn) {
    const regex = /\d(?=\d{4})/mg;
    return pn.replace(regex, "*");
}