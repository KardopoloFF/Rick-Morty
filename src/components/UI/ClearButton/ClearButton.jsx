import React from 'react';
import { useDispatch } from 'react-redux';
import { clearAll } from '../../../redux/actions/clearButton';
import './ClearButton.less';

function ClearButton() {
	const dispatch = useDispatch();
	return (
		<div>
			<button className="clear_all_button" type="button" onClick={() => dispatch(clearAll())}>Очистить</button>
		</div>
	);
}

export default ClearButton;
