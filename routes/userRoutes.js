import express from  'express';
import userAuth from '../middlewares/authmiddleware.js';
import { updateUserController } from '../controller/userController.js';

//router object

const router = express.Router();

//routes
//GET Users|| GET

// swagger for update user 
/**
 * @swagger
 * /api/v1/user/update-user:
 *   put:
 *     summary: Update a job
 *     description: This endpoint is for Updating a job entry in the system.
 *     tags: [User]
 *     security:
 *       - bearerAuth: []  # Indicates that this endpoint requires a bearer token for authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Job created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Internal server error
 */


//update user|| put
router.put('/update-user',userAuth,updateUserController)

export default router