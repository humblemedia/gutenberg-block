/**
 * BLOCK: my-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

const {
	RichText
} = wp.editor;

let registerBlockType1 = registerBlockType( 'my-block/bootstrap-columns', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Bootstrap columns' ), // Block title.
	icon: 'editor-table', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Columns' ),
		__( 'Bootstrap' ),
	],
	attributes:
	{
		leftCol: {
			type: 'string',
			source: 'html',
			selector: 'div',
			default: 'Left column text'
		},
		rightCol: {
			type: 'string',
			source: 'html',
			selector: 'div',
			default: 'Right column text'
		}
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */

	edit(props) {

		const { setAttributes, attributes } = props;

		const onChangeLeft = value => {
			setAttributes( { leftCol: value } );
		};
		const onChangeRight = value => {
			setAttributes( { rightCol: value } );
		};


		return (
			<div className={ props.className }>
			<RichText
		tagName="div"
		value={attributes.leftCol}
		onChange={onChangeLeft}
			/>
			<RichText
		tagName="div"
		value={attributes.rightCol}
		onChange={onChangeRight}
			/>
			</div>
	);
	},


	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function(props) {

		const { attributes } = props;

		return (
			<div className={ attributes.className }>
				<RichText.Content
					tagName="div"
					className="col-md-6"
					value={ attributes.leftCol }
				/>
				<RichText.Content
					tagName="div"
					className="col-md-6"
					value={ attributes.rightCol }
				/>
			</div>
	);



	}
} );