import { useEffect, useState } from 'react';
import RestroCard from './RestroCard';
import { SWIGGY_API_URL } from '../constants/constants';
import ShimmerUi from '../components/ShimmerUi';

const Body = () => {
	console.log('Body rendered ');

	// * use states
	const [allResturants, setAllResturants] = useState([]);
	const [filteredResturants, setFilteredResturants] = useState([]);
	const [clearFilter, setClearFilter] = useState([]);
	const [searchText, setSearchText] = useState('');

	// * featching data from the api
	useEffect(() => {
		console.log('useeffect renderd once at initial render');
		fetchRestroData();
	}, []);

	// !  function to fetch data from the api
	async function fetchRestroData() {
		const response = await fetch(SWIGGY_API_URL);
		const jsonData = await response.json();
		// * json ddata has sucessfuly fetched and logged
		// console.log(jsonData);

		async function checkJsonData() {
			for (let i = 0; i < jsonData?.data?.cards.length; i++) {
				// checking where the data is fount
				let checkData =
					jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
						?.restaurants;
				// console.log(checkData);
				if (checkData !== undefined) {
					return checkData;
				}
			}
		}

		const resData = await checkJsonData(jsonData);
		setAllResturants(resData);
		//! nedd to updated both the data wile fetcjg the data from api else it shows blank ui
		setFilteredResturants(resData);
		setClearFilter(resData);
	}

	function filterBtn() {
		const filteredBtn = allResturants.filter((res) => {
			return res?.info?.avgRating > 4.5;
		});
		setAllResturants(filteredBtn);
		setFilteredResturants(filteredBtn);
		// console.log("data filtered");
	}

	function clearFilteredBtn() {
		console.log('button clicked');
		setFilteredResturants(clearFilter);
		setAllResturants(clearFilter);
		setSearchText('');
	}

	return (
		<div className='body-container'>
			<div className='buttons'>
				<button
					onClick={filterBtn}
					className='btn  btn-primary'>
					Top Rated Restro
				</button>

				<div className='search-container'>
					<input
						className='text-input'
						type='text'
						placeholder='Search for restro...'
						value={searchText}
						onChange={(e) => {
							//updated search TEXT
							setSearchText(e.target.value);
						}}
					/>

					{filteredResturants.length === 0 && searchText.length === 0 ? (
						<h2 className='error'>No matches resturant found</h2>
					) : (
						<button
							onClick={() => {
								// console.log(searchText, 'text searched');
								const searchFilter = allResturants.filter((res) =>
									res?.info?.name
										.toLowerCase()
										.includes(searchText.toLowerCase()),
								);
								setFilteredResturants(searchFilter);
							}}
							className='search-btn'>
							search
						</button>
					)}

				</div>

				<button
					onClick={clearFilteredBtn}
					className='btn  btn-secondary'>
					Clear filter
				</button>
			</div>

			{/* restro card componenet */}
			{allResturants?.length === 0 ? (
				<ShimmerUi />
			) : (
				<div className='restro-container'>
					{filteredResturants.map((resData) => (
						<RestroCard
							key={resData?.info?.id}
							resObj={resData}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Body;
