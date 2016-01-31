$(function() {

	//jsCow.debug.events = true;

	NodeEditorOptions1 = {
		grid: 100,
		nodes: [
			{
				id: 'node1',
				title: 'Node 1',
				pos: {
					left: 20,
					top: 50
				},
				inputs: [
					{
						"type": false,
						"title": "Input Port 1",
						"value": 1
					}
				],
				outputs: [
					{
						"type": false,
						"title": "Output Port 1",
						"value": 1
					}
				]
			},
			{
				id: 'node2',
				title: 'Node 2',
				pos: {
					left: 200,
					top: 150
				},
				inputs: [
					{
						"type": false,
						"title": "Input Port 1",
						"value": 1
					}
				],
				outputs: [
					{
						"type": false,
						"title": "Output Port 1",
						"value": 1
					}
				]
			}
		]
	};

	NodeEditorOptions2 = {
		grid: 20,
		nodes: [
			{
				id: 'node1',
				title: 'Node 1',
				pos: {
					left: 20,
					top: 50
				},
				inputs: [
					{
						"type": false,
						"title": "Input Port 1",
						"value": 1
					}
				],
				outputs: [
					{
						"type": false,
						"title": "Output Port 1",
						"value": 1
					}
				]
			},
			{
				id: 'node2',
				title: 'Node 2',
				pos: {
					left: 100,
					top: 150
				},
				inputs: [
					{
						"type": false,
						"title": "Input Port 1",
						"value": 1
					}
				],
				outputs: [
					{
						"type": false,
						"title": "Output Port 1",
						"value": 1
					}
				]
			},
			{
				id: 'node3',
				title: 'Node 3',
				pos: {
					left: 200,
					top: 300
				},
				inputs: [
					{
						"type": false,
						"title": "Input Port 1",
						"value": 1
					}
				],
				outputs: [
					{
						"type": false,
						"title": "Output Port 1",
						"value": 1
					}
				]
			}
		]
	};








	nodeeditor1 = jsCow.get(jsCow.res.components.nodeeditor, {
		id: 'node-editor-1'
	}).target('#node-editor-1').run();

	/*
	nodeeditor2 = jsCow.get(jsCow.res.components.nodeeditor, {
		id: 'node-editor-2'
	}).target('#node-editor-2').run();
	*/






	$('body').append('<button>Set Options</button>');
	$('button').click(function() {

		jsCow.find('node-editor-1').options(NodeEditorOptions1);
		//jsCow.find('node-editor-2').options(NodeEditorOptions2);

	});

});