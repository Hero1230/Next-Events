import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../helpers/api-util";

const FilteredEvents = (props) => {
	if (!props.events || props.events.length === 0) {
		return <p>No events found for the chosen filter!</p>;
	}

	return (
		<>
			<EventList items={props.events} />
		</>
	);
};

export default FilteredEvents;

export async function getServerSideProps(context) {
	const { params } = context;

	const filterData = params.slug;

	const filteredYear = +filterData[0];
	const filteredMonth = +filterData[1];

	if (
		isNaN(filteredYear) ||
		isNaN(filteredMonth) ||
		filteredYear > 2030 ||
		filteredYear < 2021 ||
		filteredMonth < 1 ||
		filteredMonth > 12
	) {
		return {
			notFound: true,
		};
	}

	const filteredEvents = await getFilteredEvents({
		year: filteredYear,
		month: filteredMonth,
	});

	return {
		props: {
			events: filteredEvents,
		},
	};
}
