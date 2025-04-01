const goodResponse = {
data:[],
erro:{},
status:200,
message:"success",
ok:true
}
const badResponse = {
data:[],
erro:{},
status:500,
message:"something went wrong ",
ok:false
}
module.exports = {
    goodResponse,
    badResponse
}