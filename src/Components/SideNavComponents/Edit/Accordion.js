//This code is written on https://tailwind-elements.com/docs/standard/components/accordion/
import Table from './Table';

const Accordion = (props) => {
    return (
        <div className="accordion" id={props.id}>
            <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingOne">
                    <button
                        className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${props.parent}`}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        {props.heading}
                    </button>
                </h2>
                <div
                    id={props.parent}
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent={props.id}
                >
                    <div className="accordion-body py-4 px-5">
                        <Table />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
