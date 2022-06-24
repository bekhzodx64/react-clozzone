const BADGE_TYPES_CLASSES = {
	Uncommon: 'uncommon',
	Rare: 'rare',
	Epic: 'epic',
	Legendary: 'legendary',
};

const RarityBadge = ({ type, badgeType }) => {
	return (
		<span className={`rarity-badge ${BADGE_TYPES_CLASSES[badgeType]}`}>
			{type}
		</span>
	);
};

export default RarityBadge;
