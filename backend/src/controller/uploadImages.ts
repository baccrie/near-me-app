import {Request, Response, NextFunction} from 'express'
import { UploadedFile } from 'express-fileupload';
import { StatusCodes } from 'http-status-codes';
import * as path from 'path';
import * as fs from 'fs';

export async function uploadLocaleImages(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        // 1. Check if a file is uploaded
        if (!req.files || !req.files.image) {
            throw new Error('No file uploaded');
        }

        // 2. Get the uploaded file
        const file = req.files.image as UploadedFile;

        // 3. Validate file type
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        if (!allowedTypes.includes(file.mimetype)) {
            throw new Error('Invalid file type. Only JPEG, PNG, and JPG files are allowed.');
        }

        // 4. Define file extension and path
        const extension = path.extname(file.name);
        const uploadDir = path.join(__dirname, '../../public/img');
        const uploadPath = path.join(uploadDir, `${Date.now()}${extension}`);

        // 5. Check if the folder exists, create it if not
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        console.log('Upload Directory:', uploadDir);

        // 6. Move the file to the target directory
        file.mv(uploadPath, (err) => {
            if (err) {
                return next(err);
            }

            // 7. Send success response
            res.status(StatusCodes.OK).json({
                msg: 'Cover image updated successfully',
                path: uploadPath,
            });
        });
    } catch (err) {
        console.error('Error uploading file:', err);
        next(err);
    }
}
