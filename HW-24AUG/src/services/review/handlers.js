import db from "../../db/connection.js";


export const list = async (req, res, next) => {
	try {
		const reviews = await db.query(`SELECT 
		products.product_id,
		products.name,
		products.description,
		products.brand,
		products.image_url,
		products.price,
		products.category,
		products.created_at,
		review.review_id,
		review.comment,
		review.rate,
		review.product_id
		FROM reviews AS review
		INNER JOIN products AS product ON review.product_id=product.product_id ORDER BY review.created_at DESC;`);
		res.send(reviews.rows);
	} catch (error) {
		res.status(500).send(error);
	}
};

export const create = async (req, res, next) => {
	try {
		const {
			comment, rate, product_id, created_at
		} = req.body;
		const reviews = await db.query(
			`INSERT INTO review(comment, rate, product_id, created_at) VALUES('${comment}','${rate}','${product_id}','${created_at}') RETURNING *;`
		);
		res.send(reviews.rows[0]);
	} catch (error) {
		res.status(500).send(error);
	}
};

export const single = async (req, res, next) => {
	try {
		const { review_id } = req.params;
		const reviews = await db.query(
			`SELECT 
			products.product_id,
			products.name,
			products.description,
			products.brand,
			products.image_url,
			products.price,
			products.category,
			products.created_at,
			review.review_id,
			review.comment,
			review.rate,
			review.product_id
			FROM reviews AS review
			INNER JOIN products AS product ON review.product_id=product.product_id 
			WHERE review.product_id = '${review_id}'
			ORDER BY review.created_at DESC;`
		);
		const [found, ...rest] = reviews.rows;

		res.status(found ? 200 : 404).send(found);
	} catch (error) {
		res.status(500).send(error);
	}
};

export const update = async (req, res, next) => {
	try {
		const { review_id } = req.params;

		const {
			comment, 
			rate, 
			product_id,
		} = req.body;

		const reviews = await db.query(
			`UPDATE review
			 SET
			 comment='${comment}',
			 rate='${rate}',
			 product_id='${product_id}'
			 updated_at = NOW()
			 WHERE review_id=${review_id} RETURNING *;`
		);

		const [found, ...rest] = reviews.rows;

		res.status(found ? 200 : 400).send(found);
	} catch (error) {
		res.status(500).send(error);
	}
};

export const deleteReview = async (req, res, next) => {
	try {
		const { review_id } = req.params;

		const dbResult = await db.query(
			`DELETE FROM blogs
			 WHERE review_id=${review_id};`
		);
		res.status(dbResult.rowCount ? 200 : 400).send();
	} catch (error) {
		res.status(500).send(error);
	}
};
review