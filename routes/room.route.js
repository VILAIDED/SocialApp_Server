const router = require('express').Router()
const {createRoom,getRoomByType,getAllRoom,
    setSpeaker,addUserToRoom,closeRoom,
    getRoomById,deleteRoom,getRoomList} = require('../controller/room.controller')
const {verifyToken} = require('../controller/auth.controller')
router.route('/create').post(verifyToken,createRoom)
router.route('/room').post(getRoomList)
router.route('/roombytype/:type').get(getRoomByType)
router.route('/').get(getAllRoom);
router.route('/speaker/:roomId').put(setSpeaker);
router.route('/adduser/:roomId').put(addUserToRoom);
router.route('/roombyid/:roomId').get(getRoomById)
router.route('/:roomId').delete(deleteRoom);
router.route('/closeRoom/:roomId').put(closeRoom);
module.exports = router