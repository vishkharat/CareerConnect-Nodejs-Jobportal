import  express from "express";
import userAuth from "../middlewares/authmiddleware.js";
import { createJobController, deleteJobController, getAllJobsController, jobStatsController, updateJobController } from "../controller/jobsController.js";

const router = express.Router();

// routes 
// swagger for create job 
/**
 *@swagger
 * components:
 *  schemas:
 *    Jobs:
 *      type: object
 *      required:
 *        - company
 *        - position
 *        - status
 *        - workType
 *        - workLocation
 *        - createdBy
 *      properties:
 *        company:
 *          type: string
 *          description: Company name
 *        position:
 *          type: string
 *          description: Job position
 *        status:
 *          type: string
 *          description: Job status
 *        workType:
 *          type: string
 *          description: Job work type
 *        workLocation:
 *          type: string
 *          description: Job location city or country
 *        createdBy:
 *          type: mongoose.types.objectId,
 *          ref: User,
 *          description: Job created by user
 *      example:
 *        id: GDHJGD788BJBJ
 *        comapny: tcs
 *        position: mern stack
 *        status: interview
 *        workType: full-time
 *        workLocation: mumbai
 *        createdBy : hdfhfhdvchbfbcb
 */

/**
 *  @swagger
 *  tags:
 *    name: Jobs
 *    description: Jobs apis
 */

// Create job || post

/**
 * @swagger
 * /api/v1/jobs/create-job:
 *   post:
 *     summary: Creates a new job
 *     description: This endpoint is for creating a new job entry in the system.
 *     tags: [Jobs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Jobs'
 *     responses:
 *       201:
 *         description: Job created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Jobs'
 *       500:
 *         description: Internal server error
 */

// CREATE JOBS || POST(METHOD)
 router.post ('/create-job',userAuth,createJobController); // to add a new job in the database

 //swagger for get jobs
 /**
 * @swagger
 * /api/v1/jobs/get-job:
 *   post:
 *     summary: Get a Job
 *     description: This endpoint is for creating a new job entry in the system.
 *     tags: [Jobs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Jobs'
 *     responses:
 *       201:
 *         description: Job created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Jobs'
 *       500:
 *         description: Internal server error
 */

 // GET JOBS || GET(METHOD)
 router.get("/get-job", userAuth, getAllJobsController);  //to retrieve all jobs from the database</s

 // swagger for update job 

 /**
 * @swagger
 * /api/v1/jobs/update-job/:id:
 *   post:
 *     summary: Update a job
 *     description: This endpoint is for creating a new job entry in the system.
 *     tags: [Jobs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Jobs'
 *     responses:
 *       201:
 *         description: Job created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Jobs'
 *       500:
 *         description: Internal server error
 */
 // UPDATE JOBS ||  PATCH(METHOD)
 router.patch("/update-job/:id" , userAuth,updateJobController);   //to update an existing job in the database


 // swagger for delete job 
 /**
 * @swagger
 * /api/v1/jobs/delete-job/:id:
 *   post:
 *     summary: Delete a job
 *     description: This endpoint is for creating a new job entry in the system.
 *     tags: [Jobs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Jobs'
 *     responses:
 *       201:
 *         description: Job created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Jobs'
 *       500:
 *         description: Internal server error
 */
 // DELETE JOBS || DELETE(METHOD)
 router.delete("/delete-job/:id" , userAuth,deleteJobController);    //to delete a specific job by its id

 // swagger for job stats
 /**
 * @swagger
 * /api/v1/jobs/get-stats:
 *   post:
 *     summary: Adding stats and filters
 *     description: This endpoint is for creating a new job entry in the system.
 *     tags: [Jobs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Jobs'
 *     responses:
 *       201:
 *         description: Job created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Jobs'
 *       500:
 *         description: Internal server error
 */
// JOBS STATS || GET(METHOD)
router.get("/job-stats", userAuth,jobStatsController);      //to display stats of a specific job by its id

export default router
