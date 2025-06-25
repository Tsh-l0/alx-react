import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFullYear, getFooterCopy } from '../utils/utils';

export function Footer({ user }) {
	return (
		<div className="footer">
			<p>
				Copyright {getFullYear()} - {getFooterCopy(true)}
			</p>
			{user && <a href="#">Contact us</a>}
		</div>
	);
}

Footer.propTypes = {
	user: PropTypes.object,
};

Footer.defaultProps = {
	user: null,
};

export const mapStateToProps = (state) => ({
	user: state.get('user'),
});

export default connect(mapStateToProps)(Footer);
