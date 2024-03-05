import { IMG_URL } from "../constants/constants";
const RestroCard = (props) => {
	const {resObj} = props;

	const { name, cloudinaryImageId, avgRating, costForTwo, cuisines } =
		resObj?.info;
	const { deliveryTime } = resObj?.info?.sla;
	return (
		<div className='restro-card'>
			<img
				className='restro-img'
				src={`${IMG_URL}${cloudinaryImageId}`}
				alt=''
			/>
			<div className='restro-desc'>
				<h3 className='restro-heading'>{name}</h3>
				<div className='restro-ratings'>
					<p>
						{avgRating} <i className='fa fa-star'></i>
					</p>
					<p className='restro-time'> {deliveryTime} mins</p>
				</div>
				<h4 className='restro-cost'>{costForTwo} </h4>
				<h5 className='restro-cusines'>{cuisines.join(", ")} </h5>
			</div>
		</div>
	);
}

export default RestroCard
